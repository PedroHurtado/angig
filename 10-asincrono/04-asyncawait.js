class CustomerService {
    static async get(id) {
        if(id===1){
            return  {id}
        }
        throw `èl cliente ${id} no existe`
    }
  }
  class InvoiceService {
    static get(customerId) {
      return new Promise((resolve, reject) => {
        if (customerId === 1) {
          resolve({ customerId, invoices: [{}] });
        } else {
          reject(`el cliente ${customerId} no tiene facturas`);
        }
      });
    }
  }
  
  //resolve->1:n then
  //reject->1 cath
  async function main(id) {
     try{
        const {id} = await CustomerService.get(id)
        const invoices = await InvoiceService.get(id)
        console.log(invoices)
     }
     catch(err){
        console.log(err)
     }
  }
  
  main(1); //ok
  main(2); //errror
  