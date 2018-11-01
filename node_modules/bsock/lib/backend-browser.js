'use strict';

/* global window */

module.exports = {
  Client: window.WebSocket || window.MozWebSocket,
  EventSource: window.EventSource
};
