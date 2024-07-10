import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaController } from "./src/controller/ContaController";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta corrente', 'Conta Poupanca'];

    const contas: ContaController = new ContaController();

    //Novas instancias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1235, 1, "Amanda Magro", 10000.00, 100.00));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1236, 1, "João da Silva", 1000.00, 100.00));

    //Novas instancias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1237, 2, "Geana Almeida", 10000.00, 100.00));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1238, 2, "Jean Lima", 15000.00, 150.00));


    while (true) {

        console.log(colors.fg.bluestrong);
        console.log("|*****************************************************|");
        console.log("|                    CREDITECH                        |");
        console.log("|*****************************************************|");
        console.log("|                                                     |");
        console.log("|            1 - Criar Conta                          |");
        console.log("|            2 - Listar todas as Contas               |");
        console.log("|            3 - Buscar Conta por Numero              |");
        console.log("|            4 - Buscar Conta por Titular             |");
        console.log("|            5 - Atualizar Dados da Conta             |");
        console.log("|            6 - Apagar Conta                         |");
        console.log("|            7 - Sacar                                |");
        console.log("|            8 - Depositar                            |");
        console.log("|            9 - Transferir valores entre Contas      |");
        console.log("|            0 - Sair                                 |");
        console.log("|                                                     |");
        console.log("|*****************************************************|");
        console.log("                                                       ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");



        if (opcao == 0) {
            console.log("\nCrediTech: Moderno, inovador, o seu banco digital!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong);
                console.log("\n\nCriar Conta\n\n");

                console.log('Digite o número da Agência: ')
                agencia = readlinesync.questionInt("")

                console.log('Digite o nome do Titular da Conta: ')
                titular = readlinesync.question("")

                console.log('Digite o Tipo da Conta: ')
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log('Digite o Saldo da Conta: ')
                saldo = readlinesync.questionFloat("")
                colors.reset

                switch (tipo) {
                    case 1:
                        console.log(colors.fg.whitestrong);
                        console.log('Digite o Limite da Conta: ')
                        limite = readlinesync.questionFloat("")
                        colors.reset
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)

                        )
                        break;
                    case 2:
                        console.log(colors.fg.whitestrong);
                        console.log('Digite a Data de Aniversário da Conta: ')
                        aniversario = readlinesync.questionInt("")
                        colors.reset
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong);
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();
                colors.reset
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong);
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);
                colors.reset
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong);
                console.log("\n\nConsultar dados da Conta - por Titular\n\n");

                console.log("Digite o número da conta: ")
                titular = readlinesync.question("");

                contas.procurarPorTitular(titular);
                colors.reset
                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong);
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta) {
                    console.log('Digite o número da Agência: ')
                    agencia = readlinesync.questionInt("")

                    console.log('Digite o nome do Titular da Conta: ')
                    titular = readlinesync.question("")

                    console.log('Digite o Saldo da Conta: ')
                    saldo = readlinesync.questionFloat("")

                    tipo = conta.tipo
                    colors.reset
                    switch (tipo) {
                        case 1:
                            console.log(colors.fg.whitestrong);
                            console.log('Digite o Limite da Conta: ')
                            limite = readlinesync.questionFloat("")
                            colors.reset
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log(colors.fg.whitestrong);
                            console.log('Digite a Data de Aniversário da Conta: ')
                            aniversario = readlinesync.questionInt("")
                            colors.reset
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }
                } else {
                    console.log(colors.fg.redstrong);
                    console.log(`A conta ${numero} nao existe`);

                }

                keyPress();
                break;
            case 6:
                console.log(colors.fg.whitestrong);
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("");

                contas.deletar(numero);
                colors.reset
                keyPress();
                break;
            case 7:
                console.log(colors.fg.whitestrong);
                console.log("\n\nSaque\n\n");

                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ")
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);
                colors.reset
                keyPress();
                break;
            case 8:
                console.log(colors.fg.whitestrong);
                console.log("\n\nDepósito\n\n");

                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do deposito: ")
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);
                colors.reset
                keyPress();
                break;
            case 9:
                console.log(colors.fg.whitestrong);
                console.log("\n\nTransferência entre Contas\n\n");


                console.log("Digite o número da conta de origem: ")
                numero = readlinesync.questionInt("");

                console.log("Digite o número da conta de destino: ")
                numeroDestino = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ")
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);
                colors.reset
                keyPress();
                break;
            default:
                console.log(colors.fg.redstrong);
                console.log("\nOpção Inválida!\n");
                process.exit(9);
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log(colors.fg.bluestrong);
    console.log("\n|*****************************************************|");
    console.log("|  Projeto Desenvolvido por: Luana G. M. de Oliveira  |");
    console.log("|   Generation Brasil-luana.oliveira@generation.org   |");
    console.log("|   https://github.com/luana-marinho/conta_bancaria   |");
    console.log("|*****************************************************|", colors.reset);
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();