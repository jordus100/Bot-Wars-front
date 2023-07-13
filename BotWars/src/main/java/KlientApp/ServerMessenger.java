package KlientApp;

import Utils.BotRequierments;
import Utils.IServerApp;
import Utils.Klient;
import Utils.TournamentInfo;

import java.io.*;
import java.net.InetAddress;
import java.net.Socket;
import java.util.concurrent.TimeoutException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ServerMessenger {
    private final Socket socket;
    private final InputStreamReader input;
    private final PrintWriter output;
    private int timeout;

    private final InetAddress clientIP;
    private final int clientPort;

    private final String header;

    private int code = 0;

    public ServerMessenger(String domain, int port) throws IOException {
        socket = new Socket(domain, port);
        input = new InputStreamReader(socket.getInputStream());
        output = new PrintWriter(socket.getOutputStream());

        clientIP = socket.getLocalAddress();
        clientPort = socket.getPort();

        header = clientIP + ":" + clientPort + "$";
        timeout = 10;
    }

    private String send(String com) {
        //ToDo make so that it waits for every byte
        //ToDo make so the client will send message again if he won't receive the whole message.
        String mes = header + com + "$>";
        int byteSize = com.length();
        output.println("<$"+byteSize+"$"+mes);

        StringBuilder returnMes = new StringBuilder();
        int emptyLoops = 0;

        while (true) {
            try {
                if(emptyLoops >= timeout){
                    throw new TimeoutException();
                }
                Thread.sleep(1);
                if(input.ready()){
                    char c = (char) input.read();
                    returnMes.append(c);
                    if(c == '>') {
                        break;
                    }
                    emptyLoops = 0;
                } else {
                    emptyLoops++;
                }
            } catch (IOException e) {
                break;
            } catch (InterruptedException e) {
                break;
            } catch (TimeoutException e) {
                break;
            }
        }
        return scrapeMessage(returnMes.toString());
    }

    private String scrapeMessage(String mes){
        Pattern p = Pattern.compile("<\\$(.+)\\$(.+):(.+)\\$(.+)\\$>");
        Matcher m = p.matcher(mes);
        int bytesNumber = Integer.parseInt(m.group(1));
        String IP = m.group(2);
        String Port = m.group(3);
        String Mess = m.group(4);
        if (bytesNumber == Mess.length()){
            code = 0;
        }
        return Mess;
    }
}
