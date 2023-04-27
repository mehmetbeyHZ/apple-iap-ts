export default class Decrypt {
  public static decrypt(payload: string) {
    const split = payload.split('.');
    if (split.length <= 1) {
      throw new Error('Incorrect payload.');
    }
    return Buffer.from(split[1], 'base64').toString('binary');
  }
}
