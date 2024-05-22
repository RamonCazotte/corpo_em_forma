import React from 'react';
import ExerciseItem from './ExercicioItem';

function ExercicioLista({ exercises }) {
  return (
    <div>
      {exercises.map((exercise) => (
        <ExerciseItem key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}

export default ExercicioLista;

