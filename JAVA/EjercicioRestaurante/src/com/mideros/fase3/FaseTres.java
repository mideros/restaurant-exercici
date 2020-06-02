package com.mideros.fase3;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;

public class FaseTres {

	public static void main(String[] args) {
		/*FASE 3 (5 punts) Un cop hem acabat de demanar el menjar, haurem de comparar la llista amb l`array que hem fet al principi.
		 *  En el cas que la informacio que hem introducit a la List coincideixi amb la del array, haurem de sumar el preu del producte 
		 *  demanat; en el cas contrari haurem de mostrar un missatge que digui que el producte que hem demanat no existeix.*/
							
		String platos[]= new String [5];
		int precios[]= new int [5];
		List<String> lista= new ArrayList<String>();
		String seguir="";	
		boolean pedir=true;	
					
		Scanner lector = new Scanner(System.in);			
		
		
		for (int i = 0; i < platos.length; i++) {
            platos[i] = pedirPlatos(lector, "Escribe el nombre del plato " + (i + 1)+ " : ");		           
        }
		for(int j =0; j< precios.length; j++){
			 precios[j] = pedirPrecios(lector, "Escribe el precio del plato " + (platos[j])+ " : ");
		}
		
		mostrarMenu(platos,precios);
		
			
		while(pedir) {
			System.out.println("¿Desea pedir un plato? Digite: SI/NO ?");
			seguir=lector.nextLine();
			
			if(seguir.contentEquals("si") || seguir.contentEquals("SI")) {
				pedir=true;
				elegirPlato(lector,"Escribe el nombre del plato a elegir",lista);				
			}else if(seguir.contentEquals("no") || seguir.contentEquals("NO")) {					
				System.out.println("¡Gracias por realizar su pedido!");
				pedir=false;
			}else {
			System.out.println("¡No es una opcion valida! Digite: SI ó NO ");
			pedir=true;
			}  	
		} 							
		calcularTotal(lista,platos,precios);	
		lector.close();	
	}
	
	public static String pedirPlatos(Scanner lector, String mensaje) 
	{
		String plato="";
					
		boolean validarP=false;			
		while(!validarP){
			System.out.println(mensaje);
			plato=(lector.nextLine()).toLowerCase();	        
	        if(Pattern.matches("[a-z ñ]+", plato) == true){     	           	
	        	validarP=true;   			        	
	        }else{
	        	validarP=false;
	        	System.out.println("Plato no valido, ingrese nuevamente el plato");
	        	}		        		        
		}	        	   
		return plato;
	}
	
	
	public static int pedirPrecios(Scanner lector, String mensajeP) 
	{				
	    String precio="";
	    int p=0;
	    boolean validar=false;	        
	    while(!validar){
	    	System.out.println(mensajeP);
	    	precio=lector.nextLine();
	    	if(Pattern.matches("[0-9]+", precio) == true){ 
	    		p=Integer.parseInt(precio);
	    		if(p>=5 && p<=500){
	        		validar=true;
				}else {
					validar=false;
					System.out.println("Precio no valido, ingreselo nuevamente");
					}   
	        }else {
	        	validar=false;
				System.out.println("Precio no valido, ingreselo nuevamente");
	        }	        		        	
	    }
	    return p;					
	}	        		
	
	public static void mostrarMenu(String platos[], int precios[])
	{			
		for(int k=0; k<platos.length;k++)
		{
			System.out.print(" El plato " + platos[k]); 
			System.out.println(" tiene el precio " +precios[k] +" euros" );
		}	
	}
	

	public static String elegirPlato(Scanner lector, String mensaje, List<String> lista) 
	{
		String pElegido="";		
		boolean pedir=false;			
		while(!pedir) {
			System.out.println(mensaje);
			pElegido=(lector.nextLine()).toLowerCase();
		    if(Pattern.matches("[a-z ñ]+", pElegido) == true){			      	   	
		       	lista.add(pElegido);
		       	pedir=true; 		        	       	
		    }else {
		    	pedir=false;
		        System.out.println("Plato no valido, ingrese nuevamente el plato");
		    	}		        		        
		}	        	   
		return pElegido;
	}

		
	public static void calcularTotal( List<String> lista, String platos[], int precios[]) 
	{
		int contador=0;
		int totalMenu=0;
		String plato="";
			
		for(int k=0; k<lista.size();k++)  
		{
			contador=0;
			
			for (int l= 0; l<platos.length;l++)
			{	
				if(lista.get(k).equals(platos[l])){
						totalMenu+=precios[l];					
				}else{
					contador=contador+1;					
					plato=lista.get(k);				
					}				
			}
			
			if(contador==5) {
				System.out.println("el plato "+ plato+" no existe en el menu");
			}			
		}	
		
		System.out.println("El total a pagar: " + totalMenu + " euros");
		calcularBilletes(totalMenu);			
	}
			

	public static void calcularBilletes(int totalMenu)
	{
		int b5,b10,b20,b50,b100,b200,b500,m2,m1;
			
		b500=totalMenu/500;
		totalMenu=totalMenu-(b500*500);		
			
		b200=totalMenu/200;
		totalMenu=totalMenu-(b200*200);
			
		b100=totalMenu/100;
		totalMenu=totalMenu-(b100*100);
			
		b50=totalMenu/50;
		totalMenu=totalMenu-(b50*50);
			
		b20=totalMenu/20;
		totalMenu=totalMenu-(b20*20);
			
		b10=totalMenu/10;
		totalMenu=totalMenu-(b10*10);
			
		b5=totalMenu/5;
		totalMenu=totalMenu-(b5*5);
			
		m2=totalMenu/2;
		totalMenu=totalMenu-(m2*2);
			
		m1=totalMenu/1;
		totalMenu=totalMenu-(m1*1);
			
		if(b500 >0){
			System.out.println("Se sugiere pagar con: "+ b500 + "billetes de 500  euros");
		}
		if(b200 >0){
			System.out.println("Se sugiere pagar con: "+ b200 + " billetes de 200 euros");
		}
		if(b100 >0){
			System.out.println("Se sugiere pagar con: "+ b100 + " billetes de 100 euros");
		}
		if(b50 >0){
			System.out.println("Se sugiere pagar con: "+ b50 + " billetes de 50 euros");
		}
		if(b20 >0){
			System.out.println("Se sugiere pagar con: "+ b20 + " billetes de 20  euros");
		}
		if(b10 >0){
			System.out.println("Se sugiere pagar con: "+ b10 + " billetes de 10 euros");
		}
		if(b5 >0){
			System.out.println("Se sugiere pagar con: "+ b5 + " billetes de 5 euros");
		}	
		if(m2 >0){
			System.out.println("Se sugiere pagar con: "+ m2 + " monedas de 2 euros");
		}
		if(m1 >0){
			System.out.println("Se sugiere pagar con: "+ m1 + " monedas de 1 euro");
		}		
	}
}
