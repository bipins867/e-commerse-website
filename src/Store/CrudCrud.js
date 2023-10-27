const baseUrl='https://crudcrud.com/api/c2a04bdd2c424462b5bd9a53105b747e'
function convertEmail2Url(email){
    email=email.replaceAll('@','')
    email=email.replaceAll('.','')

    const xurl=`${baseUrl}/cart${email}`
    return xurl;
}


exports.postCartData= (cartItem,email)=>{
    const url = convertEmail2Url(email);
    fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(cartItem)
    })
    .then(response=>response.json())
    .then(result=>{
        if(result.error){
            throw new Error(result)
        }
        else{
            console.log(result)
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getCartData=(setCartItem,email)=>{
    const url = convertEmail2Url(email);
    fetch(url)
    .then(response=>response.json())
    .then(result=>{
        if(result.error){
            throw new Error(result)
        }
        else{
            
            setCartItem(result)
        }
    })
    .catch(err=>{
        console.log(err)
    })
}