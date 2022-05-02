export const CONTRACT_ADDRESS = '0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1';

export const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "_materialOrder_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_materialOrder_list",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "materialName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "supplierName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "createdDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finishedDate",
        "type": "uint256"
      },
      {
        "internalType": "enum Cosmetics.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_productOrder_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_productOrder_list",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "retailerName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "createdDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finishedDate",
        "type": "uint256"
      },
      {
        "internalType": "enum Cosmetics.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_productionBatch_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_productionBatch_list",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "createdDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finishedDate",
        "type": "uint256"
      },
      {
        "internalType": "enum Cosmetics.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_transportProductOrder_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "_transportProductOrder_list",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "productOrderId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "retailerName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "createdDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finishedDate",
        "type": "uint256"
      },
      {
        "internalType": "enum Cosmetics.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "materialOrderId",
        "type": "uint256"
      }
    ],
    "name": "acceptMaterialOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productOrderId",
        "type": "uint256"
      }
    ],
    "name": "acceptProductOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productionBatchId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "process",
        "type": "string"
      }
    ],
    "name": "addCheckingProcess",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productionBatchId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "material",
        "type": "string"
      }
    ],
    "name": "addMaterial",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productionBatchId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "process",
        "type": "string"
      }
    ],
    "name": "addProductionProcess",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productionBatchId",
        "type": "uint256"
      }
    ],
    "name": "changeToChecking",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productionBatchId",
        "type": "uint256"
      }
    ],
    "name": "changeToDone",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "supplierName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "materialName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "createMaterialOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "retailerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "createProductOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "createProductionBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "retailerName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "productOrderId",
        "type": "uint256"
      }
    ],
    "name": "createTransportProductOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMaterialOrder",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "materialName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "supplierName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finishedDate",
            "type": "uint256"
          },
          {
            "internalType": "enum Cosmetics.Status",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct Cosmetics.MaterialOrder[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getProductOrder",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "productName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "retailerName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finishedDate",
            "type": "uint256"
          },
          {
            "internalType": "enum Cosmetics.Status",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "string[]",
            "name": "locations",
            "type": "string[]"
          }
        ],
        "internalType": "struct Cosmetics.ProductOrder[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getProductionPatch",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "productName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "finishedDate",
            "type": "uint256"
          },
          {
            "internalType": "enum Cosmetics.Status",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "string[]",
            "name": "materials",
            "type": "string[]"
          },
          {
            "internalType": "string[]",
            "name": "productionProcess",
            "type": "string[]"
          },
          {
            "internalType": "string[]",
            "name": "checkingProcesses",
            "type": "string[]"
          }
        ],
        "internalType": "struct Cosmetics.ProductionBatch[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "materialOrderId",
        "type": "uint256"
      }
    ],
    "name": "receiveMaterialOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productOrderId",
        "type": "uint256"
      }
    ],
    "name": "receiveProductOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];