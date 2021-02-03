import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.15.11:3333/uploads/${image.path}`,
    };
  },      //Atenção: não esquecer das vírgulas, como da última vez

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};