class Utils {
  static getFriendId() {
    const [, friendId] = window.location.pathname.match(/\/(\d+)$/) || [];
    return +friendId;
  }
}

export default Utils;
