import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function YandexMap() {
  // Координаты центра карты и маркера (Новосибирск)
  const center = [54.898604, 83.042848];
  const zoom = 15;

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <YMaps query={{ load: 'package.full' }}>
        <Map
          state={{
            center: center,
            zoom: zoom,
          }}
          width="100%"
          height="100%"
        >
          <Placemark
            geometry={center}
            options={{
              preset: 'islands#redIcon',
            }}
            properties={{
              balloonContent: 'Мы здесь!',
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}

export default YandexMap;