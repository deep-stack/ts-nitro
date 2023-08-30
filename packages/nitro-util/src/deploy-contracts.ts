import { ContractFactory, providers } from 'ethers';

import nitroAdjudicatorArtifact from '@cerc-io/nitro-protocol/dist/artifacts/contracts/NitroAdjudicator.sol/NitroAdjudicator.json';
import consensusAppArtifact from '@cerc-io/nitro-protocol/dist/artifacts/contracts/ConsensusApp.sol/ConsensusApp.json';
import virtualPaymentAppArtifact from '@cerc-io/nitro-protocol/dist/artifacts/contracts/VirtualPaymentApp.sol/VirtualPaymentApp.json';

export async function deployContracts(signer: providers.JsonRpcSigner): Promise<[string, string, string]> {
  const nitroAdjudicatorFactory = new ContractFactory(
    nitroAdjudicatorArtifact.abi,
    nitroAdjudicatorArtifact.bytecode,
  ).connect(signer);
  const nitroAdjudicator = await nitroAdjudicatorFactory.deploy();
  await nitroAdjudicator.deployTransaction.wait();

  const virtualPaymentAppFactory = new ContractFactory(
    virtualPaymentAppArtifact.abi,
    virtualPaymentAppArtifact.bytecode,
  ).connect(signer);
  const virtualPaymentApp = await virtualPaymentAppFactory.deploy();
  await virtualPaymentApp.deployTransaction.wait();

  const consensusAppFactory = new ContractFactory(
    consensusAppArtifact.abi,
    consensusAppArtifact.bytecode,
  ).connect(signer);
  const consensusApp = await consensusAppFactory.deploy();
  await consensusApp.deployTransaction.wait();

  return [nitroAdjudicator.address, virtualPaymentApp.address, consensusApp.address];
}

export async function deployToken(signer: providers.JsonRpcSigner, artifact: any): Promise<string> {
  const tokenFactory = new ContractFactory(
    artifact.abi,
    artifact.bytecode,
  ).connect(signer);

  const owner = await signer.getAddress();
  const token = await tokenFactory.deploy(owner);

  return token.address;
}
