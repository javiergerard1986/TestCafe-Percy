import { Selector } from 'testcafe';
import percySnapshot from '@percy/testcafe';

// prettier-ignore
fixture `Visual Regression Test with Percy`
    .page `https://www.example.com`
test('Percy Demo - Example Page', async t => {
    await t.wait(2000);
    await percySnapshot(t, 'Example Page');
})
