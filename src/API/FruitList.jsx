class FruitList{

    async getFruitList(){
        try{

            let res = await fetch('https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=all');
            res = await res.json();
            return res;
        }catch(err){
            return err;
        }
    }

}

export default new FruitList();