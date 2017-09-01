import { MockHttp } from './../mock-utils';
import { DocsClient } from '../../src/docs/docs.client';
import { MessageModel } from '../../src/bot/gitter.models';
import { MessageBuilder } from '../../src/util/message-builder';
import { expect } from 'chai';

const mockHttp = new MockHttp(
 {
    '@angular/common': [
      {
        'title': 'AsyncPipe',
        'path': 'common/index/AsyncPipe-pipe.html',
        'docType': 'pipe',
        'stability': 'stable',
        'secure': 'false',
        'barrel': '@angular/common'
      },
      {
        'title': 'CommonModule',
        'path': 'common/index/CommonModule-class.html',
        'docType': 'class',
        'stability': 'stable',
        'secure': 'false',
        'barrel': '@angular/common',
      },
    ],
  }
);


describe(`Docs Client`, () => {

  const client = new DocsClient(mockHttp);

  it('should match docs with different wording', () => {
    const matched = client.commandNode.matcher.test('docs');
<<<<<<< HEAD:spec/clients/docs.spec.ts
    expect
    expect(matched).to.equal(true);
  })
=======
    expect(matched).to.equal(true);
  });
>>>>>>> 472f488593a4d805e2b63c06337bad7ac2ecc013:src/docs/docs.spec.ts

  it('should contain link to correct API', () => {
    const msg = {text: 'docs AsyncPipe'};
    const actual: string = client.commandNode.children[0].commandFn(msg).toString();
    const expected = 'https://angular.io/docs/ts/latest/api/common/index/AsyncPipe-pipe.html';
    expect(client.command(msg).toString()).to.contain(expected);
<<<<<<< HEAD:spec/clients/docs.spec.ts
  })
=======
  });
>>>>>>> 472f488593a4d805e2b63c06337bad7ac2ecc013:src/docs/docs.spec.ts

  it(`should get docs for an existing entry`, () => {
    const msg = {text: 'docs AsyncPipe'};
    const actual: string = client.commandNode.children[0].commandFn(msg).toString();
    const expected: string = `***[\`AsyncPipe\`](https://angular.io/docs/ts/latest/api/common/index/AsyncPipe-pipe.html)` +
      `*** is a **pipe** found in \`@angular/common\` and ` +
      `is considered *stable*.`;
    expect(actual).to.equal(expected);
  });

  it(`should provide a helpful message if docs don't exist`, () => {
    const msg = {text: 'docs nonsense'};
    const actual: string = client.commandNode.children[0].commandFn(msg).toString();
    const expected: string = `Aww, bummer :anguished: Looks like you wanted docs for _nonsense_, ` +
      `but I couldn't find anything. Might be a good idea to look directly at ` +
      `[API Reference](https://angular.io/docs/ts/latest/api/)! :grin:`;
    expect(actual).to.equal(expected);
  });

  it(`should provide a helpful message if docs don't exist (for more than one word)`, () => {
    const msg = {text: 'docs some nonsense here'};
    const actual: string = client.commandNode.children[0].commandFn(msg).toString();
    const expected: string = `Aww, bummer :anguished: Looks like you wanted docs for ` +
      `_some nonsense here_, but I couldn't find anything. Might be a good idea ` +
      `to look directly at [API Reference](https://angular.io/docs/ts/latest/api/)! :grin:`;
    expect(actual).to.equal(expected);
  });

});