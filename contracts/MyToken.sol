// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("Dynamic Token", "DT") {
        _mint(msg.sender, 1_000_000 * 10**decimals());
    }
}
