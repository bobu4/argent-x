// Generated by ts-to-zod
import { z } from "zod"
import { FunctionAbiType } from "./starknetLibTypes"

export const builtinsSchema = z.array(z.string())

export const contractEntryPointFieldsSchema = z.object({
  selector: z.string(),
  offset: z.string(),
  builtins: builtinsSchema.optional(),
})

export const entryPointsByTypeSchema = z.object({
  CONSTRUCTOR: z.array(contractEntryPointFieldsSchema),
  EXTERNAL: z.array(contractEntryPointFieldsSchema),
  L1_HANDLER: z.array(contractEntryPointFieldsSchema),
})

export const compressedProgramSchema = z.string()
export const programSchema = z.object({
  builtins: builtinsSchema,
  data: z.array(z.string()),
})
export const abiEntrySchema = z.object({
  name: z.string(),
  type: z.union([z.literal("felt"), z.literal("felt*"), z.string()]),
})

export const functionAbiTypeSchema = z.nativeEnum(FunctionAbiType)

export const functionAbiSchema = z.object({
  inputs: z.array(abiEntrySchema),
  name: z.string(),
  outputs: z.array(abiEntrySchema),
  stateMutability: z.literal("view").optional(),
  state_mutability: z.string().optional(),
  type: functionAbiTypeSchema,
})

export const eventEntrySchema = z.object({
  name: z.string(),
  type: z.union([z.literal("felt"), z.literal("felt*"), z.string()]),
  kind: z.union([z.literal("key"), z.literal("data")]),
})

export const legacyEventSchema = z.object({
  name: z.string(),
  type: z.literal("event"),
  data: z.array(eventEntrySchema),
  keys: z.array(eventEntrySchema),
})

export const cairo1EventSchema = z.object({
  name: z.string(),
  members: z.array(eventEntrySchema),
  kind: z.literal("struct"),
  type: z.literal("event"),
})

export const structAbiSchema = z.object({
  members: z.array(
    abiEntrySchema.and(
      z.object({
        offset: z.number(),
      }),
    ),
  ),
  name: z.string(),
  size: z.number(),
  type: z.literal("struct"),
})

export const eventAbiSchema = z.union([cairo1EventSchema, legacyEventSchema])

export const abiSchema = z.array(
  z.union([functionAbiSchema, eventAbiSchema, structAbiSchema, z.any()]),
)

export const legacyContractClassSchema = z.object({
  program: programSchema,
  entry_points_by_type: entryPointsByTypeSchema,
  abi: abiSchema,
})

export const byteCodeSchema = z.array(z.string())

export const sierraProgramDebugInfoSchema = z.object({
  type_names: z.array(z.tuple([z.number(), z.string()])),
  libfunc_names: z.array(z.tuple([z.number(), z.string()])),
  user_func_names: z.array(z.tuple([z.number(), z.string()])),
})

export const sierraContractEntryPointFieldsSchema = z.object({
  selector: z.string(),
  function_idx: z.number(),
})

export const sierraEntryPointsByTypeSchema = z.object({
  CONSTRUCTOR: z.array(sierraContractEntryPointFieldsSchema),
  EXTERNAL: z.array(sierraContractEntryPointFieldsSchema),
  L1_HANDLER: z.array(sierraContractEntryPointFieldsSchema),
})

export const compiledSierraSchema = z.object({
  sierra_program: byteCodeSchema,
  sierra_program_debug_info: sierraProgramDebugInfoSchema.optional(),
  contract_class_version: z.string(),
  entry_points_by_type: sierraEntryPointsByTypeSchema,
  abi: abiSchema,
})

export const pythonicHintsSchema = z.array(
  z.tuple([z.number(), z.array(z.string())]),
)

export const cairoAssemblySchema = z.object({
  prime: z.string(),
  compiler_version: z.string(),
  bytecode: byteCodeSchema,
  hints: z.array(z.any()),
  pythonic_hints: pythonicHintsSchema,
  entry_points_by_type: entryPointsByTypeSchema,
})

export const compiledSierraCasmSchema = cairoAssemblySchema

export const compiledContractClassSchema = z.union([
  legacyContractClassSchema,
  compiledSierraSchema,
])