// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

pragma solidity ^0.8.0;

contract CustomContract {
  uint storedData;

  struct TokenBalance {
    address tokenAddress;
    uint256 tokenBalance;
  }
  function set(uint x) public {
    storedData = x;
  }

  function getBalances(address _address, address[] memory tokenAddresses) public view returns (TokenBalance[]) {
    TokenBalance[] memory balanceMap;

    for (uint i = 0; i < tokenAddresses.length; i ++) {
      uint256 tokenBalance = IERC20(tokenAddresses[i]).balanceOf(_address);
      balanceMap.push(tokenAddresses[i], tokenBalance);
    }
    return balanceMap;
  }
}
