﻿// @ts-check

import { goBack } from "../DomHelpers/DomHelpers";
import { registerHistoryBack, unRegisterHistoryBack } from "../HistoryBackHelper/HistoryBackHelper";
import { getSlideTranslateValue, setSlideTranslateValue } from "../SlideHelper/SlideHelper";
import { registerEvent, unRegisterEvent } from "../EventDelegator/EventDelegator";
import { initTrapFocus, disposeTrapFocus } from "../TrapFocusHelper/TrapFocusHelper";
import { registerMediaQuery, unRegisterMediaQuery } from "../MediaQueryMatcher/MediaQueryMatcher";
import { registerDetectTheme, unRegisterDetectTheme } from "../DetectThemeHelper/DetectThemeHelper";

// @ts-ignore
window.Skclusive = {
  // @ts-ignore
  ...window.Skclusive,
  Material: {
    // @ts-ignore
    ...(window.Skclusive || {}).Material,
    Script: {
      goBack,
      getSlideTranslateValue,
      setSlideTranslateValue,
      registerEvent,
      unRegisterEvent,
      initTrapFocus,
      disposeTrapFocus,
      registerMediaQuery,
      unRegisterMediaQuery,
      registerHistoryBack,
      unRegisterHistoryBack,
      registerDetectTheme,
      unRegisterDetectTheme,
    }
  }
};
