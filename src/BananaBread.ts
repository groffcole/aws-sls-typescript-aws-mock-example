import SQS from "aws-sdk/clients/sqs";

const sqs = new SQS();

export const doSomething = async (queueName: string): Promise<void> => {
  await sqs.getQueueUrl({ QueueName: queueName }).promise();
};
