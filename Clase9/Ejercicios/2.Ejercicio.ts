/*2. Florería: Envío Programado de Pedidos 
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe 
contener el nombre del cliente, la cantidad de flores y el tipo de flores. 
Implementa las siguientes funciones: 
• Añadir un pedido. 
• Programar el envío de un pedido utilizando setTimeout() para simular un 
retraso de 5 segundos. 
• Mostrar todos los pedidos pendientes. */

class Pedido {
    nombreCliente: string;
    cantidadFlores: number;
    tipoFlores: string;

    constructor(nombreCliente: string, cantidadFlores: number, tipoFlores: string) {
        this.nombreCliente = nombreCliente;
        this.cantidadFlores = cantidadFlores;
        this.tipoFlores = tipoFlores;
    }
}
class Floreria {    
    Pedidos: Pedido[] = [];
    agregarPedido(nombreCliente: string, cantidadFlores: number, tipoFlores: string): void {
        const nuevoPedido = new Pedido(nombreCliente, cantidadFlores, tipoFlores);
        this.Pedidos.push(nuevoPedido);
        console.log(`Pedido de ${nombreCliente} agregado con éxito.`);
    }
    programarEnvioPedido(nombreCliente: string): void { 
        const pedido = this.Pedidos.find(p => p.nombreCliente === nombreCliente);
        const pedidoIndex = this.Pedidos.findIndex(p => p.nombreCliente === nombreCliente);
        if (pedido) {
            setTimeout(() => {
                console.log(`El pedido de ${pedido.cantidadFlores} ${pedido.tipoFlores} para ${pedido.nombreCliente} ha sido enviado.`);
                this.Pedidos.splice(pedidoIndex, 1);
                this.mostrarPedidosPendientes();
            }, 5000); // Retraso de 5 segundos
            
        } else {
            console.log(`No se encontró el pedido para ${nombreCliente}.`);
        }
    }
    mostrarPedidosPendientes(): void {
        console.log("Pedidos pendientes:");
        this.Pedidos.forEach(p => {
            console.log(`Cliente: ${p.nombreCliente}, Cantidad: ${p.cantidadFlores}, Tipo: ${p.tipoFlores}`);
        });
    }       
}
const floreria = new Floreria();    
floreria.agregarPedido("Juan", 10, "Rosas");
floreria.agregarPedido("Maria", 5, "Tulipanes");
floreria.agregarPedido("Pedro", 20, "Lirios");
floreria.mostrarPedidosPendientes();
floreria.programarEnvioPedido("Maria"); 
floreria.programarEnvioPedido("Juan");

