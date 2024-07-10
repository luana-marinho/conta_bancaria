import { Conta } from "../model/Conta";
import { colors } from "../util/Colors";
import { ContaRepository } from "../repository/ContaRepository";


export class ContaController implements ContaRepository {


    //Coleção array que vai armazenar os Objetos da conta
    private listaContas: Array<Conta> = new Array<Conta>();

    //Controlar os números das contas
    public numero: number = 0;

    procurarPorTitular(titular: string): void {
        let buscaPorTitular = this.listaContas.filter(c =>
            c.titular.includes(titular)
        );

        buscaPorTitular.forEach(conta => conta.visualizar());
    }

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar();
        else
            console.log(colors.fg.redstrong);
        console.log("A Conta não encontrada");
        colors.reset;
    }
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar()
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.greenstrong);
        console.log("A conta foi cadastrada com sucesso!")
        colors.reset;
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.greenstrong);
            console.log(`\ Conta atualizada com sucesso!`);
            colors.reset;
        }
        else {
            console.log(colors.fg.redstrong);
            console.log("A Conta não encontrada");
            colors.reset;
        }



    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.greenstrong);
            console.log(`\nConta excluida com sucesso`);
            colors.reset;
        }
        else {
            console.log(colors.fg.redstrong);
            console.log("A Conta não foi encontrada");
            colors.reset;
        }
    }
    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            if (buscaConta.sacar(valor) === true)
                console.log(colors.fg.greenstrong);
            console.log(`\ Saque realizado com sucesso!`);
            colors.reset;
        }
        else {
            console.log(colors.fg.redstrong);
            console.log("Saldo insuficiente");
            colors.reset;
        }
    }
    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor);
            console.log(colors.fg.greenstrong);
            console.log(`\ Depósito realizado com sucesso!`);
            colors.reset;
        }
        else
            console.log(colors.fg.redstrong);
        console.log("A conta não foi encontrada");
        colors.reset;
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {

        let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        let buscaContaDestino = this.buscarNoArray(numeroDestino);

        if (buscaContaOrigem !== null && buscaContaDestino !== null) {
            if (buscaContaOrigem.sacar(valor) === true)
                buscaContaDestino.depositar(valor);
            console.log(colors.fg.greenstrong);
            console.log(`\ Transferencia realizada com sucesso!`);
            colors.reset;
        }
        else {
            console.log(colors.fg.redstrong);
            console.log("A conta de Origem e/ou Destino não foram encontradas!");
            colors.reset;

        }

    }
    // Métodos Auxiliares

    public gerarNumero(): number {
        return ++this.numero
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero == numero)
                return conta;
        }
        return null;
    }
}


