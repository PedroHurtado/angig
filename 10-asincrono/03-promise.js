class CustomerService {
  static get(id) {
    return new Promise((resolve, reject) => {
      if (id === 1) {
        resolve({ id });
      } else {
        reject(`El cliente ${id} no existe`);
      }
    });
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
function main(id) {
  CustomerService.get(id)   //1
    .then(({ id }) => InvoiceService.get(id)) //2
    .then((invoices) => console.log(invoices)) //3

    .catch((error) => console.log(error)); //
}

main(1); //ok
main(2); //errror
