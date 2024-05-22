import React from 'react';

function ExerciseItem({ exercise }) {
  return (
    <div className="ExerciseItem">
      <img src={exercise.imagemUrl} alt={exercise.nome} />
    <div>
      <h2>{exercise.nome}</h2>
      <p>Repetições: {exercise.repeticoes}</p>
      <p>Séries: {exercise.series}</p>
      <p>Carga: {exercise.carga}</p>
    </div>
    <div>
    <a href="#">Video</a>
    </div>
    <div>
    <input type="checkbox" id="exerciseComplete" name="exerciseComplete" />
      <label htmlFor="exerciseComplete">Concluído</label>
    </div>
  </div>
  );
}

export default ExerciseItem;