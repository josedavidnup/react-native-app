import { DOG_TYPE_COLORS } from './constans';

const getColorByDogType = (type) => DOG_TYPE_COLORS[type.toLowerCase()];

export default getColorByDogType;
