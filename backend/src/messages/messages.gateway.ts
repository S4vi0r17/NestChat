import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from './messages.service';
import { NewMessageDto } from './dtos/new-message.dto';

@WebSocketGateway({ cors: true })
export class MessagesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(private readonly messagesService: MessagesService) {}

  handleConnection(client: Socket) {
    this.messagesService.registerClient(client);

    this.server.emit('clients', this.messagesService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.messagesService.unregisterClient(client.id);

    this.server.emit('clients', this.messagesService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  handleMessage(client: Socket, payload: NewMessageDto) {
    // this.server.emit('message-from-server', payload);
    console.log(client.id, payload);
  }
}
