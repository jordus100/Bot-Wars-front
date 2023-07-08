package KlientApp;

import Utils.IServerApp;
import Utils.Klient;

import java.io.*;

public class KlientApp {
    private Klient player;
    private final IServerApp server;

    public KlientApp(IServerApp serwer){
        this.server = serwer;
        this.player = new Klient();
    }

    public void doSomething(String [] args){
        switch (args[1]){
            case "server":

                break;
            case "conf":

                break;

            case "list":
                parseList(args[2]);
                break;
            case "game":

                break;
            case "help":
            case "-h":
                printHelp();
                break;
        }
    }

    private void printHelp(){
        try {
            FileReader fileReader = new FileReader("KlientApp/KlientHelp.txt");
            BufferedReader reader = new BufferedReader(fileReader);
            String line;
            while((line = reader.readLine())!= null)
                System.out.println(line);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private void parseList(String arg){
        String [] list = new String[0];
        switch (arg){
            case "games":
                System.out.println("Aviable games:");
                list = server.getListGames();
                break;
            case "tournaments":
                System.out.println("Aviable tournaments:");
                list = server.getListTournaments();
                break;
            case "history":
                System.out.println("Tournaments history:");
                list = player.getHistTournaments();
                break;
            case "players":
                System.out.println("Players:");
                list = server.getListPlayers();
                break;
        }
        printList(list);
    }

    private void printList(String [] l){
        if (l == null) return;
        for (String line : l){
            System.out.println(" - " + line);
        }
    }
}

