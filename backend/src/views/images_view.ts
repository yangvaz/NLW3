import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },      //Atenção: não esquecer das vírgulas, como da última vez

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};