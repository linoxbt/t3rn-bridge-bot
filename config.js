export class Config {
  /**
   *  Network ARB <Swap from ARB to Base sepolia
   *  Network BASE <Swap from BASE to ARB sepolia
   */
  static BRIDGEAMOUNT = "2";
  static BASERPCURL = "https://sepolia.base.org";
  static ARBRPCURL = "https://sepolia-rollup.arbitrum.io/rpc";

  static BASETOARBCONTRACTADDRESS =
    "0xcee0372632a37ba4d0499d1e2116ecff3a17d3c3";
  static ARBTOBASECONTRACTADDRESS =
    "0x22b65d0b9b59af4d3ed59f18b9ad53f5f4908b54";

  static BASETOARBRAWDATA = [
    "0x56591d59617262740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003fe6A02AB20dE8bf34fEFc106D72D7094C8C4404000000000000000000000000000000000000000000000000016315a8283b4f0c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016345785d8a0000",
  ];
  static ARBTOBASERAWDATA = [
    "0x56591d59626173740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003fe6A02AB20dE8bf34fEFc106D72D7094C8C4404000000000000000000000000000000000000000000000000016319708c2b3b0c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016345785d8a0000",
  ];
}
