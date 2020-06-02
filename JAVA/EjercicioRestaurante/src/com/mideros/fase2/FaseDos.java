package com.mideros.fase2;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;

public class FaseDos {

	public static void main(String[] args) {
		/*FASE 2 (3 punts) 
		 * Amb un bucle for haurem d�omplir els dos arrays anteriorment creats. Afegirem el nom del plat i despr�s el preu. (1 punt)
		 * Un cop plens els dos arrays haurem de mostrar-los i preguntar que es vol per menjar, guardarem la informaci� en una List fent 
		 * servir un bucle while. (1 punt)
		 * Haurem de preguntar si es vol seguir demanant menjar. Podeu fer servir el sistema (1:Si / 0:No), per tant haureu de crear un 
		 * altre variable int per guardar la informaci�. (1 punt)*/
		
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
			System.out.println("¿ Desea pedir un plato? Digite: SI/NO ?");
			seguir=lector.nextLine();
			
			if(seguir.contentEquals("si") || seguir.contentEquals("SI")) {
				pedir=true;
				elegirPlato(lector,"Escribe el nombre del plato a elegir",lista);				
			}else if(seguir.contentEquals("no") || seguir.contentEquals("NO")) {					
				System.out.println("¡Gracias por realizar su pedido!");
				pedir=false;
			}else {
			System.out.println("¡No es una opcion valida! Vuelva a realizar su pedido");
			pedir=true;//false
			}  	
		} 							
		lector.close();	
	}
	
	public static String pedirPlatos(Scanner lector, String mensaje) 
	{
		String plato="";
		boolean validarP=false;			
		while(!validarP){
			System.out.println(mensaje);
			plato=lector.nextLine();
	        
	        if(Pattern.matches("[a-zA-Z]+", plato) == true){
	        	plato.toLowerCase();
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
			pElegido=lector.nextLine();
		    if(Pattern.matches("[a-zA-Z]+", pElegido) == true){		        	
		       	pElegido.toLowerCase();		        	
		       	lista.add(pElegido);
		       	pedir=true; 		        	       	
		    }else {
		    	pedir=false;
		        System.out.println("Plato no valido, ingrese nuevamente el plato");
		    	}		        		        
		}	        	   
		return pElegido;
	}
}
