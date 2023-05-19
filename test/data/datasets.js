import { comparator } from 'ramda';

import { dataStore } from './data-store';
import { extendedProjects } from './projects';

// eslint-disable-next-line import/prefer-default-export
export const extendedDatasets = dataStore({
  factory: ({
    id,

    project = extendedProjects.size !== 0
      ? extendedProjects.first()
      : extendedProjects.createPast(1, { datasets: 1 }).last(),
    name = 'trees',
    entities = 0,
    lastEntity = null,
    properties = [],
    linkedForms = [],
    approvalRequired = false
  }) => ({
    id,
    projectId: project.id,
    name,
    entities,
    lastEntity,
    properties,
    linkedForms,
    approvalRequired
  }),
  sort: comparator((dataset1, dataset2) => dataset1.name < dataset2.name)
});
