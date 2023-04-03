import React from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "one of the biggest buildings in the world",
    imageURL: "https://unsplash.com/photos/FD-gzGKS5sY",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Mirador Hanga Kioe",
    description: "An ancient and mysterious statue from the easter island",
    imageURL: "https://unsplash.com/photos/IihpWkddhFY",
    address: "Unnamed Road, Isla de Pascua, Valparaíso, Chile",
    location: {
      lat: -27.14709359,
      lng: -109.42676051,
    },
    creator: "u1",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlacesList items={loadedPlaces} />;
};

export default UserPlaces;
