
import messages from '../lib/messages.js'; // Cambia la extensión del archivo a .js

export function getMessageById(id) {
  return messages[id] || { message: 'Mensaje no encontrado', type: 'error' };
}
