import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) {
        final int PORT = 4040;
        final String PATH = "C:\\Program Files\\poweroff\\bat\\poweroff.bat";

        try {
            ServerSocket serSocket = new ServerSocket(PORT);
            System.out.println("Il server si è avviato");

            while (true) {
                Socket c = serSocket.accept();
                BufferedReader in = new BufferedReader(new InputStreamReader(c.getInputStream()));

                String msg = in.readLine();
                System.out.println("Ricevuto: " + msg);

                if ("POWEROFF".equals(msg)) {
                    ProcessBuilder pb = new ProcessBuilder("cmd.exe", "/c", "start \"\" \"" + PATH + "\"");
                    pb.start();
                }

                c.close();
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}