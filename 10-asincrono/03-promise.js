class CustomerService {
    static get(id,cb){
        if(id===1){
            cb(null,{id})
        }
        else{
            cb("el cliente no existe", null)
        }
    }
}
class InvoiceService{
    static get(customerId,cb){
        if(customerId ===1){
            cb(null,{customerId,invoices:[{}]})
        }
        else{
            cb(`el cliente ${customerId} no tiene facturas`,null)
        }
    }
}

function main(id){
    CustomerService.get(id,(error,data)=>{
        if(data){
            console.log(data)
            InvoiceService.get(data.id,(data,error)=>{
                if(data){
                    console.log(data)
                }    
                else{
                    console.log(error)
                }
            })
        }
        else{
            console.log(error)
        }
    })
}

main(1) //ok
main(2) //errror