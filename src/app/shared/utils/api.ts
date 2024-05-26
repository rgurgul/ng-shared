const protocol = location.protocol.replace(/^[^:]+:\s*/, (val) =>
  val === 'http:' ? 'ws:' : 'wss:'
);
const host = window.location.host;

export class Api {
  private static DATA_BASE_END_POINT = 'https://api.debugger.pl/';
  private static AUTH_BASE_END_POINT = 'https://auth.debugger.pl/';

  static ITEMS_END_POINT = Api.DATA_BASE_END_POINT + 'items';
  static MANDATORY_END_POINT = Api.ITEMS_END_POINT + '/mandatory';
  static WORKERS_END_POINT = Api.DATA_BASE_END_POINT + 'workers';
  static UPLOAD_END_POINT = Api.DATA_BASE_END_POINT + 'utils/upload';
  static DOES_IT_EXIST = Api.DATA_BASE_END_POINT + 'utils/exists';
  static DATA_FORM_CONFIG =
    Api.DATA_BASE_END_POINT + 'utils/register-config-form';

  static LOGIN_END_POINT = Api.AUTH_BASE_END_POINT + 'login';
  static LOGOUT_END_POINT = Api.AUTH_BASE_END_POINT + 'logout';
  static LOGGED_END_POINT = Api.AUTH_BASE_END_POINT + 'is-logged';
  static REGISTER_END_POINT = Api.AUTH_BASE_END_POINT + 'register/ajax';

  // WebSocket Game end-points
  static GAME_PLAY = `${protocol}//${host}/play`;
  static GAME_GET_USER = 'wss://demo-game.debugger.pl/play';
  static GAME_REGISTER_USER = 'register-user';
}
