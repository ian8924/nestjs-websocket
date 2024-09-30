import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventGateway {
  // 訂閱 channel 名稱
  @SubscribeMessage('newMessage')
  handleMessage(@MessageBody() body: any, @ConnectedSocket() client: Socket) {
    client.emit('onMessage');
    console.log(body, 'newMessage');
  }
}
