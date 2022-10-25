import bcrypt = require('bcryptjs');

export default class Crypt {
  static encript = (password: string): string => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  };

  static compare = (password: string, hash: string): boolean => bcrypt.compareSync(password, hash);
}
