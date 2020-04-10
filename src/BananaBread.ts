import { SQS } from "aws-sdk";

const sqs = new SQS();

export const doSomething = async (queueName: string): Promise<string> => {
  const theThing = await sqs.getQueueUrl({ QueueName: queueName }).promise();
  return theThing.QueueUrl;
};
