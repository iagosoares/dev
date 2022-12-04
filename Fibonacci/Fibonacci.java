public class HelloWorld{

	public static void main(String[] args){

		int i = 0;
		int j = 1;
		int soma = 0;
		int cont = 2;
		int quantidade = 0;

		// Simulação de uma entrada 
		quantidade = 15;

		System.out.println("Sequencia de Fibonacci");
		System.out.print(i);
		System.out.print(" --> ");
		System.out.print(j);

		while(cont < quantidade){
			soma = i + j;
			System.out.printf(" --> %d",soma);
			i = j;
			j = soma;

			cont++;

		}



	}

}

