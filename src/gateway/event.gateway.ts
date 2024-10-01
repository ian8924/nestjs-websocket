import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventGateway {
  @WebSocketServer()
  server: Server;
  // 訂閱 channel 名稱
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }

  //   @SubscribeMessage('time')
  //   handleTime(@MessageBody() body: any, @ConnectedSocket() client: Socket) {
  //     const time = new Date().getTime();
  //     this.server.emit('time', time);
  //     this.server.emit('message', `Server time: ${time}`);
  //   }
}
