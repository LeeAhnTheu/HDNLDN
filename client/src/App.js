import { useEffect, useState } from 'react';
import * as Web3Service from './helpers/Web3Service';
import useSetGet from './helpers/useSetGet';

function App() {
    const [account, setAccount] = useState(null);
    const [cosmetics, setCosmetics] = useState(null);

    const productionBatch = useSetGet([]);
    const productName = useSetGet("");
    const amount = useSetGet(0);

    async function loadBlockchain(){
        if(!window.ethereum){
            alert("Please install metamask!");
            return;
        }

        try{
            const accounts = await Web3Service.getAccounts();
            setAccount(accounts[0]);

            const contract = Web3Service.getContract();
            setCosmetics(contract);
        }
        catch(err){
            console.log("Load blockchain bugging!\n", err);
        }
    } 

    async function fetchData(){
        if(!cosmetics)
            return;


        const list = await cosmetics.methods.getProductionPatch().call();
        console.log(list);
        productionBatch.set(list);
    }

    async function connectAccount(){
        const account = await Web3Service.connectAccount();
        setAccount(account);
    }

    useEffect(()=>{
        loadBlockchain();
    }, []);

    useEffect(()=>{
        fetchData();
    }, [cosmetics]);

    function onSubmit(e){
        e.preventDefault();

        cosmetics.methods.createProductionBatch(productName.val, parseInt(amount.val))
        .send({from: account})
        .once('receipt', async receipt => {
            console.log("success!\n", receipt);
            const count = await cosmetics.methods._productionBatch_count().call();
            const data = await cosmetics.methods._productionBatch_list(count).call();
            productionBatch.set(state => [...state, data]);
        });
    }

    function onAddMaterial(e, id){
        cosmetics.methods.addMaterial(parseInt(id), e.target.value)
        .send({from: account})
        .once('receipt', async receipt => {
            console.log("success!\n", receipt);
        });
    }

    return (
        <div>
            <h3>Account address: {account}</h3>
            <button onClick={connectAccount}>Connect</button>
            <br/>
            <br/>
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" onChange={(e)=>productName.set(e.target.value)} placeholder="product name"/>
                    <input type="text" onChange={(e)=>amount.set(e.target.value)} placeholder="amount"/>
                    <button type='submit'>add</button>
                </form>
            </div>
            <br/>
            <br/>
            <br/>
            <table border="1">
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Amount</th>
                        <th>Materials</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productionBatch.val.map(o => (
                            <tr key={o.id}>
                                <td>{o.productName}</td>
                                <td>{o.amount}</td>
                                <td>
                                    {o.materials && (
                                        <ul>
                                            { o.materials.map((o, i) => <li key={i}>{o}</li>)}
                                        </ul>
                                    )}
                                </td>
                                <td>
                                    <input type="text" onBlur={(e)=>onAddMaterial(e, o.id)}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;