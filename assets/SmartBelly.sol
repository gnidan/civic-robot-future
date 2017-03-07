pragma solidity ^0.4.9;

contract SmartBelly {

    address owner;
    mapping (address => uint) public credits;
    uint public creditValue = 0.1 ether;

    function SmartBelly() {
        owner = msg.sender;
    }

    function () payable {
        // replenish ETH balance
    }

    function depositWaste() {
        credits[msg.sender] += 1;
    }

    function withdraw() returns (bool) {
        uint creditsOwed, etherAmount

        creditsOwed = credits[msg.sender];
        etherAmount = (
            creditsOwed * creditValue
        );

        credits[msg.sender] = 0;
        if (msg.sender.send(etherAmount)) {
            return true;
        } else {
            credits[msg.sender] = creditsOwed;
            return false;
        }
    }

    function close() onlyOwner {
        selfdestruct(owner);
    }

    modifier onlyOwner {
        if (msg.sender != owner)
            throw;
        _;
    }
}
