import { isIOS } from '@nativescript/core/platform/index.ios';


// Cursor position change method
export const setCursorPosition = (nativeView: any, position: number): void => {
  if (isIOS) {
    try {
      const beginOfDoc = nativeView.ios.beginningOfDocument;
      const textPosition = nativeView.ios.positionFromPositionOffset(
        beginOfDoc,
        position
      );
      nativeView.ios.selectedTextRange = nativeView.ios.textRangeFromPositionToPosition(
        textPosition,
        textPosition
      );
    } catch (e) {
      console.error(e);
    }
  }
  try {
    nativeView.android.setSelection(position);
  } catch (e) {}
};
