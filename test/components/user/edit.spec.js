import NotFound from '../../../src/components/not-found.vue';

import { load } from '../../util/http';

describe('UserEdit', () => {
  it('requires the id route param to be integer', async () => {
    const app = await load('/users/x/edit');
    app.findComponent(NotFound).exists().should.be.true();
  });
});
