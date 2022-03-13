import React, { useEffect } from 'react';
import Typography from '../ui/typography';
import {
	ChainId,
	ETH,
	UniswapDappSharedLogicContext,
} from 'uniswap-dapp-integration-shared';
import UniswapReact from 'uniswap-react';
import './Swap.sass'

function Swap() {
	const [uniswapDappSharedLogicContext, setUniswapDappSharedLogicContext] =
		React.useState<undefined | UniswapDappSharedLogicContext>(undefined);

	useEffect(() => {
		if ((window as any).ethereum) {
			(async () => {
				// MetaMask example
				if ((window as any).ethereum !== undefined) {
					const accounts = await (window as any).ethereum.request({
						method: 'eth_requestAccounts',
					});

					// basic config!
					const uniswapDappSharedLogicContext: UniswapDappSharedLogicContext = {
						supportedNetworkTokens: [
							{
								chainId: ChainId.MAINNET,
								defaultInputToken: ETH.MAINNET().contractAddress,
								defaultOutputToken: '0xd19f9858de386c938d1b832a5b87f80a178fe28d',
								supportedTokens: [
									{ contractAddress: ETH.MAINNET().contractAddress },
									{ contractAddress: '0xd19f9858de386c938d1b832a5b87f80a178fe28d' },
									{ contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7' },
									{ contractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862' },
									{ contractAddress: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9' },
									{ contractAddress: '0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F' },
								],
							},
							{
								chainId: ChainId.RINKEBY,
								defaultInputToken: ETH.RINKEBY().contractAddress,
								defaultOutputToken: '0xef0e839cf88e47be676e72d5a9cb6ced99fad1cf',
								supportedTokens: [
									{ contractAddress: ETH.RINKEBY().contractAddress },
									{ contractAddress: '0xef0e839cf88e47be676e72d5a9cb6ced99fad1cf' },
								],
							},
						],
						ethereumAddress: accounts[0],
						ethereumProvider: (window as any).ethereum,
					};
					setUniswapDappSharedLogicContext(uniswapDappSharedLogicContext);
				}
			})();

		}
	}, []);

	return (
		<div className={`wrapper`}>
			{uniswapDappSharedLogicContext !== undefined && (
				<UniswapReact
					uniswapDappSharedLogicContext={uniswapDappSharedLogicContext}
				/>
			)}
		</div>
	);
}

export default Swap;