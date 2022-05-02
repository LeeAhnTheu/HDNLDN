//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Cosmetics{
    enum Status{
        ORDERING,
        PRODUCING,
        CHECKING,
        ACCEPT,
        CANCEL,
        SHIPPING,
        DONE
    }

    //def - struct
    struct ProductionBatch{
        uint id;
        string productName;
        uint amount;
        uint createdDate;
        uint finishedDate;
        Status status;
        string[] materials;
        string[] productionProcess;
        string[] checkingProcesses;
    }

    struct MaterialOrder{
        uint id;
        string materialName;
        string supplierName;
        uint amount;
        uint createdDate;
        uint finishedDate;
        Status status;
    }

    struct ProductOrder{
        uint id;
        string productName;
        string retailerName;
        uint amount;
        uint createdDate;
        uint finishedDate;
        Status status;
        string[] locations;
    }

    struct TransportProductOrder{
        uint id;
        uint productOrderId;
        string retailerName;
        uint createdDate;
        uint finishedDate;
        Status status;
    }
    //end  - struct

    //def - global var
    uint public _productionBatch_count = 0;
    mapping(uint => ProductionBatch) public _productionBatch_list;

    uint public _materialOrder_count = 0;
    mapping(uint => MaterialOrder) public _materialOrder_list;

    uint public _productOrder_count = 0;
    mapping(uint => ProductOrder) public _productOrder_list;

    uint public _transportProductOrder_count = 0;
    mapping(uint => TransportProductOrder) public _transportProductOrder_list;

    address private deployer;
    //end - globalvar

    constructor(){
        deployer = msg.sender;
    }

    //def - modifier
    modifier onlyProducer{
        require(msg.sender == deployer, "Only producer");        
        _;
    }
    //end - modifier

    //def - function
    function createProductionBatch(string memory productName, uint amount) public{
        ProductionBatch storage a = _productionBatch_list[++_productionBatch_count];
        a.id = _productionBatch_count;
        a.productName = productName;
        a.amount = amount;
        a.createdDate = block.timestamp;
        a.finishedDate = 0;
        a.status = Status.PRODUCING;
    }

    function createProductOrder(string memory retailerName, string memory productName, uint amount) public{
        ProductOrder storage a = _productOrder_list[++_productOrder_count];
        a.id = _productOrder_count;
        a.productName = productName;
        a.retailerName = retailerName;
        a.amount = amount;
        a.createdDate = block.timestamp;
        a.finishedDate = 0;
        a.status = Status.ORDERING;
    }

    function createMaterialOrder(string memory supplierName, string memory materialName, uint amount) public{
        _materialOrder_list[++_materialOrder_count] = MaterialOrder(
            _materialOrder_count,
            materialName,
            supplierName,
            amount,
            block.timestamp,
            0,
            Status.ORDERING
        );
    }

    function createTransportProductOrder(string memory retailerName, uint productOrderId) public{
        //todo
        _transportProductOrder_list[++_transportProductOrder_count] = TransportProductOrder(
            _transportProductOrder_count,
            productOrderId,
            retailerName,
            block.timestamp,
            0,
            Status.ORDERING
        );
    }

    function addMaterial(uint productionBatchId, string memory material) public onlyProducer{
        _productionBatch_list[productionBatchId].materials.push(material);
    }

    function addProductionProcess(uint productionBatchId, string memory process) public onlyProducer{
        _productionBatch_list[productionBatchId].productionProcess.push(process);
    }

    function addCheckingProcess(uint productionBatchId, string memory process) public onlyProducer{
        Status currentStatus = _productionBatch_list[productionBatchId].status;
        require(currentStatus == Status.CHECKING, "Can't add checking process now!");

        _productionBatch_list[productionBatchId].checkingProcesses.push(process);
    }

    function changeToChecking(uint productionBatchId) public onlyProducer{
        _productionBatch_list[productionBatchId].status = Status.CHECKING;
    }

    function changeToDone(uint productionBatchId) public onlyProducer{
        _productionBatch_list[productionBatchId].status = Status.DONE;
    }

    function acceptMaterialOrder(uint materialOrderId) public {
        _materialOrder_list[materialOrderId].status = Status.SHIPPING;
    }

    function receiveMaterialOrder(uint materialOrderId) public {
        _materialOrder_list[materialOrderId].status = Status.DONE;
        _materialOrder_list[materialOrderId].finishedDate = block.timestamp;
    }

    function acceptProductOrder(uint productOrderId) public {
        _productOrder_list[productOrderId].status = Status.SHIPPING;
    }

    function receiveProductOrder(uint productOrderId) public {
        _productOrder_list[productOrderId].status = Status.DONE;
        _productOrder_list[productOrderId].finishedDate = block.timestamp;
    }

    function getProductionPatch() public onlyProducer view returns (ProductionBatch[] memory){
        ProductionBatch[] memory list = new ProductionBatch[](_productionBatch_count);

        for(uint i=1; i <= _productionBatch_count; i++){
            list[i-1] = _productionBatch_list[i];
        }

        return list;
    }

    function getMaterialOrder() public onlyProducer view returns (MaterialOrder[] memory){
        MaterialOrder[] memory list = new MaterialOrder[](_materialOrder_count);

        for(uint i=1; i <= _materialOrder_count; i++){
            list[i-1] = _materialOrder_list[i];
        }

        return list;
    }

    function getProductOrder() public onlyProducer view returns (ProductOrder[] memory){
        ProductOrder[] memory list = new ProductOrder[](_productOrder_count);

        for(uint i=1; i <= _productOrder_count; i++){
            list[i-1] = _productOrder_list[i];
        }

        return list;
    }
    //end  - function
}