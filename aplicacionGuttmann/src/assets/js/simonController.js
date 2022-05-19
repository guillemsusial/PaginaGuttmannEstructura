class DirectLightsController 
    {
        constructor(){
            this.Rounds=createArray(6);
        }

      
       

        /*Awake()
        {
            lightGrid.OnLightPressed += OnLightPressed;
        }*/

       OnRun()
        {
            _result = new DirectLightsResult();

            animator.SetBool(AnimatorIsShown, true);
            foreach (let round of this.Rounds)
            {
                _currentRound = round;
                _currentLightsSequence = _currentRound.MainSequence;

                var lightsSequenceIndex = 0;
                for (; lightsSequenceIndex < 2; lightsSequenceIndex++)
                {
                    _currentLightsSequenceAnswers = new List<DirectLightsResultSequenceInput>();
                    _currentLightIndex = 0;

                    counterText.text = "0/" + _currentLightsSequence.Length;

                    lightImage.color = directLightsData.NotYourTurnLight;
                    labelText.text = I18n.Instance.__("Screening.DirectLights.Memorize");

                    lightsCanvasGroup.interactable = false;

                    animator.SetTrigger(AnimatorNext);
                    yield return new WaitForSeconds(directLightsData.TimeLabelLasts);
                    animator.SetTrigger(AnimatorNext);

                    yield return new WaitForSeconds(directLightsData.TimeBetweenLights);

                    yield return DisplayLights(_currentLightsSequence, directLightsData.TimeLightLasts,
                        directLightsData.TimeBetweenLights);

                    lightImage.color = directLightsData.YourTurnLight;
                    labelText.text = I18n.Instance.__("Screening.DirectLights.YourTurn");

                    lightsCanvasGroup.interactable = true;

                    _roundTimer = Timer.Register(float.MaxValue, null,
                        null, false, true);

                    animator.SetTrigger(AnimatorNext);
                    yield return new WaitForDone(directLightsData.TimeLabelLasts,
                        () => _currentLightsSequenceAnswers.Count > 0);
                    animator.SetTrigger(AnimatorNext);

                    yield return new WaitUntil(() =>
                        _currentLightsSequenceAnswers.Count == _currentLightsSequence.Length);

                    ProcessRoundResult();

                    if (_lastResultSequence.type != ResultType.Correct)
                        _currentLightsSequence = _currentRound.SecondarySequence;
                    else break;
                }

                if (_lastResultSequence.type == ResultType.Wrong && lightsSequenceIndex == 2) break;
            }

            animator.SetBool(AnimatorIsShown, false);
            while (!animator.IsInState("Hidden")) yield return null;
        }

        OnBuildResults() => _result;
        ProcessRoundResult()
        {
            _roundTimer.Pause();

            var correctRound = true;

            for (var i = 0; i < _currentLightsSequenceAnswers.Count && correctRound; i++)
                if (new Vector2Int(_currentLightsSequenceAnswers[i].x, _currentLightsSequenceAnswers[i].y) !=
                    _currentLightsSequence[i])
                    correctRound = false;

            _lastResultSequence = new DirectLightsResultSequence
            {
                targets = _currentLightsSequence.ToList().ConvertAll(input => new DirectLightsResultSequenceTarget
                {
                    x = input.x, y = input.y
                }),
                inputs = _currentLightsSequenceAnswers,
                type = _currentLightsSequenceAnswers.Any(input => input.type == ResultType.Wrong)
                    ? ResultType.Wrong
                    : ResultType.Correct,
                answerTime = _roundTimer.GetTimeElapsed()
            };

            _result.AddSequenceResult(_lastResultSequence);
        }

        DisplayLights(lightsOrder, timeLightLasts,timeBetweenLights)
        {
            foreach (var lightCoords in lightsOrder)
            {
                counterText.text = ++_counterLightNumber + "/" + _currentLightsSequence.Length;

                lightGrid.SetLight(lightCoords, true);
                yield return new WaitForSeconds(timeLightLasts);
                lightGrid.SetLight(lightCoords, false);
                yield return new WaitForSeconds(timeBetweenLights);
            }
        }

       OnLightPressed(pressedLightCoords)
        {
            counterText.text = --_counterLightNumber + "/" + _currentLightsSequence.Length;
            _currentLightsSequenceAnswers.Add(new DirectLightsResultSequenceInput
            {
                x = pressedLightCoords.x, y = pressedLightCoords.y,
                type = pressedLightCoords == _currentLightsSequence[_currentLightIndex]
                    ? ResultType.Correct
                    : ResultType.Wrong
            });

            _currentLightIndex++;
        }
    
    
    
        
    }