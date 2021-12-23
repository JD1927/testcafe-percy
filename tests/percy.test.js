import { Selector } from 'testcafe';
import percySnapshot from '@percy/testcafe';

// prettier-ignore
fixture `Visual Regression Test with Percy`
  .page(`http://www.example.com/`);

test('Percy Demo - Example Page', async t => {
  await t.wait(1000);
  await percySnapshot(t, 'Example Page');
});
