
import styles from './../sass/noticejs.scss';
import * as API from './api';
import { Components } from './components';
import * as helper from './helpers';

export default class NoticeJs {
  /**
   * @param {object} options 
   * @returns {Noty}
   */
  constructor (options = {}) {
    this.options = Object.assign(API.Defaults, options);
    this.component = new Components();
    
    // Handle callbacks - merge user callbacks with defaults
    if (options.callbacks) {
      Object.keys(options.callbacks).forEach(callbackName => {
        if (this.options.callbacks.hasOwnProperty(callbackName)) {
          const userCallback = options.callbacks[callbackName];
          // If user provided a function directly, convert it to array
          if (typeof userCallback === 'function') {
            this.options.callbacks[callbackName] = [userCallback];
          } 
          // If user provided an array, use it
          else if (Array.isArray(userCallback)) {
            this.options.callbacks[callbackName] = userCallback;
          }
        }
      });
    }
    
    // Register callbacks from arrays
    ['beforeShow', 'onShow', 'afterShow', 'onClose', 'afterClose', 'onClick', 'onHover'].forEach(callbackName => {
      const callbacks = this.options.callbacks[callbackName];
      if (Array.isArray(callbacks)) {
        callbacks.forEach(cb => {
          if (typeof cb === 'function') {
            this.on(callbackName, cb);
          }
        });
      }
    });
    
    return this;
  }
  
  /**
   * @returns {NoticeJs}
   */
  show () {
    let container = this.component.createContainer();
    if (document.querySelector('.noticejs-' + this.options.position) === null) {
      document.body.appendChild(container);
    }

    let noticeJsHeader;
    let noticeJsBody;
    let noticeJsProgressBar;
    
    // Create NoticeJs header
    noticeJsHeader = this.component.createHeader(this.options.title, this.options.closeWith);

    // Create NoticeJs body
    noticeJsBody = this.component.createBody(this.options.text);
  
    // Create NoticeJs progressBar
    if(this.options.progressBar === true) {
      noticeJsProgressBar = this.component.createProgressBar();
    }
  
    //Append NoticeJs
    let noticeJs = helper.appendNoticeJs(noticeJsHeader, noticeJsBody, noticeJsProgressBar);

    return noticeJs;
  }

  /**
   * @param {string} eventName
   * @param {function} cb
   * @return {NoticeJs}
   */
  on (eventName, cb = () => {}) {
    if (typeof cb === 'function' && this.options.callbacks.hasOwnProperty(eventName)) {
      this.options.callbacks[eventName].push(cb);
    }
    
    return this;
  }

  /**
   * @param {Object} options 
   * @return {Notice}
   */
  static overrideDefaults (options) {
    this.options = Object.assign(API.Defaults, options);
    return this
  }
}