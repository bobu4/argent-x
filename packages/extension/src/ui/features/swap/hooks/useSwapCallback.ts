import { selectedBaseAccountView } from "../../../views/account"
import { useView } from "../../../views/implementation/react"
import { swapService } from "../../../services/swap"
import { addressSchema } from "@argent/shared"
import { Trade } from "../../../../shared/swap/model/trade.model"
import { isUndefined } from "lodash-es"

export function useSwapCallback(trade?: Trade, userSlippageTolerance?: number) {
  const selectedAccount = useView(selectedBaseAccountView)

  const handleSwap = async () => {
    if (!trade || isUndefined(userSlippageTolerance) || !selectedAccount) {
      return
    }

    const accountAddress = addressSchema.parse(selectedAccount.address)

    const { calls } = await swapService.getSwapOrderFromTrade(
      accountAddress,
      trade,
      userSlippageTolerance,
    )

    return swapService.makeSwap(
      calls,
      `Swap ${trade.payToken.symbol} to ${trade.receiveToken.symbol}`,
    )
  }

  return handleSwap
}
