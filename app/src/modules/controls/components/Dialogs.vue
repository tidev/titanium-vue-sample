<template>
  <base-window title="Dialogs" layout="vertical">
    <base-label left="20" top="10" fontWeight="bold">Alert</base-label>
    <base-button top="20" @click="showAlert()">Show</base-button>

    <base-label left="20" top="20" fontWeight="bold">Confirm</base-label>
    <base-button top="20" @click="showConfirm()">Show</base-button>

    <base-label left="20" top="20" fontWeight="bold">Prompt</base-label>
    <base-button top="20" @click="showPrompt()">Show</base-button>

    <base-label left="20" top="20" fontWeight="bold">Custom</base-label>
    <base-button top="20" @click="showCustom()">Show</base-button>
  </base-window>
</template>

<script>
import {
  AlertDialog,
  BaseDialog,
  DialogAction,
  ConfirmDialog,
  ConfirmResult,
  PromptDialog
} from 'titanized';

// Set default properties for all dialogs
BaseDialog.defaults.tintColor = '#4fc08d';

export default {
  methods: {
    showAlert() {
      const dialog = new AlertDialog({
        title: 'Titanium x Vue.js',
        message: 'It\'s awesome!'
      });
      dialog.show().then(() => {
        Ti.API.info('Alert dialog closed');
      });
    },
    showConfirm() {
      const dialog = new ConfirmDialog({
        message: 'Do you want to deactivate your account?',
        okButtonText: 'Do it!'
      });
      dialog.show().then(result => {
        Ti.API.info(`Confirm dialog closed, result: ${result}`);
        if (result === ConfirmResult.Ok) {
          Ti.API.info('OK button pressed');
        }
      });
    },
    showPrompt() {
      const dialog = new PromptDialog({
        message: 'Please enter your name.',
        neutralButtonText: 'Help',
        hintText: 'First name'
      });
      dialog.show().then(result => {
        Ti.API.info(`Prompt dialog closed, result: ${JSON.stringify(result)}`);
        if (result.confirm === ConfirmResult.Ok) {
          Ti.API.info(`Hello ${result.value}!`);
        }
        if (result.confirm === ConfirmResult.Neutral) {
          Ti.API.info('Your name, you should really know it...');
        }
      });
    },
    showCustom() {
      const dialog = new BaseDialog('Isn\'t this neat?');
      const yesAction = new DialogAction('Yes', () => { Ti.API.info(':)') });
      dialog.addAction(yesAction);
      const noAction = new DialogAction('No', () => { Ti.API.info(':(') })
      noAction.cancel = true;
      dialog.addAction(noAction);
      dialog.show();
    }
  }
}
</script>
