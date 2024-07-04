import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";

export function main() {

    let opcao: number;

    //Objetos da Classe Conta
    //Novas instancias
    const c1: Conta = new Conta (1, 1234, 1, "Letícia Marinho", 500000.00);
    const c2: Conta = new Conta (2, 1234, 2, "Marcos Vinicius", 600000.00);

    //Visualizando os dados da conta 01
    // c1.visualizar();

    //Visualizando os dados da conta 02
    // c2.visualizar();

    //Visualizando o saldo da conta 01
    // console.log(`O saldo da conta 01 é: ${c1.saldo}`)
    
    //Saque na conta 1
    // console.log(`Sacar 100 reais da conta C1: ${c1.sacar(100)}`)
    // c1.visualizar;

    //Saque na conta 2
    // console.log(`Sacar 100 reais da conta C2: ${c2.sacar(700000)}`)
    // c2.visualizar;
        
    //Depositar na conta 1
    // console.log(`Sacar 100 reais da conta C1: ${c1.depositar(500)}`)
    // c1.visualizar;

    //Depositar na conta 1
    // console.log(`Sacar 100 reais da conta C1: ${c2.depositar(100000)}`)
    // c2.visualizar;

 //Objetos da Classe Conta
    //Novas instancias
    const cc1: ContaCorrente = new ContaCorrente (3, 1234, 1, "Amanda Magro", 100000.00, 1000000.00);
    const cc2: ContaCorrente = new ContaCorrente (4, 1234, 1, "João da Silva", 1000.00, 100.00);

    cc1.visualizar();
    cc2.visualizar();


    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                    CREDITECH                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco CrediTech: Moderno, inovador, o seu banco digital!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");
                process.exit(9);
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Luana Gabriela M. de Oliveira");
    console.log("Generation Brasil - luana.oliveira@generation.org");
    console.log("https://github.com/luana-marinho/conta_bancaria");
    console.log("*****************************************************");
}
main();